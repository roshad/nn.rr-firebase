export const creatorProject = (form) => (dispatch,getState, {  getFirebase,getFirestore, }) => {    
    
    const fireStore = getFirestore()
    fireStore.collection('project').add(form)
}

