const createProject = (project) => (dispatch, { getFirestore, getFirebase }) => {
    const fireStore = getFirestore()
    fireStore.collection('project').add({
        mother:'die'
    })
}