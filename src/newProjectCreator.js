export const creatorProject = (form) => (dispatch,getState, { getFirestore, getFirebase }) => {    
    
    const fireStore = getFirestore()
    fireStore.collection('project').add(form)
}

