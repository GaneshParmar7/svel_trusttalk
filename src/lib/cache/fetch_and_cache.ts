import type { Cacheable } from "$lib/cache/cacheable";
import { dataServerURL } from "$lib/config";

async function fetch_server_data<T extends Cacheable>(lastCachedId = 0, typename: string): Promise<T[]> {

    const response = await fetch(dataServerURL + typename + '?after=' + lastCachedId, {
        credentials: 'include', // Include credentials in the request
        method: 'GET',
    });

    const data = await response.json();

    console.log(data);
    console.log(typename);
    console.log(lastCachedId);
    console.log(dataServerURL);

    return data.data;

    // return _messages;
}

async function sendModifiedDataToServer<T extends Cacheable>(modifiedData: T[], typename: string): Promise<void> {

    try {
        const response = await fetch(dataServerURL + typename, {
            credentials: 'include', // Include credentials in the request
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(modifiedData),
        });

        if (!response.ok) {
            throw new Error("Failed to send modified data to the server.");
        }

        console.log("Modified data sent to the server successfully.");
    } catch (error) {
        throw new Error("Could not send modified data to the server. Please try again.");
    }
}

async function pullData<T extends Cacheable>(typename: string, refresh = false): Promise<T[]> {
    try {

        const storedData = localStorage.getItem(typename);

        let data: T[] = [];
        let maxId = 0;

        if (storedData !== undefined && storedData !== null && storedData !== 'undefined') {
            data = JSON.parse(storedData);

            if (!refresh) { // If we're not refreshing, just return the cached data
                return data;
            }
            maxId = data.reduce((max, obj) => Math.max(max, obj.id), 0);
        }
        console.log(maxId);
        console.log(typename);
        const newEntries: T[] = await fetch_server_data(maxId, typename) ?? []; // Fetch additional data from the server.

        console.log(newEntries);

        if (newEntries.length > 0) {
            data = [...data, ...newEntries];

            // Remove duplicates based on id
            const idSet: { [id: number]: boolean } = {};

            data = data.filter((obj) => {
                if (idSet[obj.id]) {
                    return false;
                } else {
                    idSet[obj.id] = true;
                    return true;
                }
            });

            // data = data.map(obj => {
            //     const newObj = new (obj.constructor as new () => T)();
            //     Object.assign(newObj, obj);
            //     return newObj;
            // });

            localStorage.setItem(typename, JSON.stringify(data));
            console.log('got server data & saved');
        }

        console.log(data);
        return data;



    } catch (error) {
        throw new Error('Could not load data, please check your internet connection.'); // Fail the UI if there is an error
    }
}


async function pushData<T extends Cacheable>(typename: string, updatedData: T[]): Promise<void> {
    try {
        // const storedData = localStorage.getItem(typename);
        if (updatedData === undefined || updatedData === null) {
            return;
        }

        localStorage.setItem(typename, JSON.stringify(updatedData));

        const modifiedData: T[] = updatedData.filter((obj) => obj.isModified);

        if (modifiedData.length === 0) {
            return;
        }

        // Send modified data to the server as an array to update
        await sendModifiedDataToServer(modifiedData, typename);

        // Update the 'modified' flag for the sent objects
        updatedData = updatedData.map((obj) => {
            if (obj.isModified) {
                return { ...obj, isModified: false };
            }
            return obj;
        });

        localStorage.setItem(typename, JSON.stringify(updatedData));

        console.log("Sync completed");
    } catch (error) {
        throw new Error("Could not sync data. Please check your internet connection.");
    }
}

export { pullData, pushData };