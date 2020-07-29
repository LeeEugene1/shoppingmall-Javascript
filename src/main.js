//Fetch the items from the Json File
function loadItems(){
    //데이터를 네트워크를통해 받아오기
    return fetch('data/data.json')
    .then(response => console.log(response));
}

//data.json파일을 동적으로 읽어와 아이템을 전달
loadItems()
// .then(item =>{
//     displayItems(items);
//     setEventListeners(items);

// })
// .catch(console.log);