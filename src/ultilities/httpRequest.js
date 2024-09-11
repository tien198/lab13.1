const DATABASE_URL = 'https://httprequestproj-default-rtdb.asia-southeast1.firebasedatabase.app/'

export async function getTasks() {
    const respond = await fetch(`${DATABASE_URL}/tasks.json`)
    return await respond.json()
}

export async function postTask(task) {
    await fetch(`${DATABASE_URL}/tasks.json`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-type': 'application/json'
        }
    })
}