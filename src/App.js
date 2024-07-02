import FriendList from "./components/FriendList";
import FormAddForm from "./components/FormAddForm";
import FormSplitBill from "./components/FormSplit-Bill";
import { useState } from "react";
import FormAddFriends from "./components/FormAddForm";

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App(){
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)

  function handleAddFriend (friend){
    setFriends((friends) => [...friends, friend]);
  }

  function handleShowFriend(){
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedItem(null);
  }

  function handleSelected(friend){
    setSelectedItem((selectedItem) => selectedItem?.id === friend.id ? null :friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value){
    setFriends(
      friends.map((friend) => {
        if(friend.id === selectedItem?.id){
          return{
            ...friend,
            balance: friend.balance + value,
          }
        }
        return friend;
      })
    );
    setSelectedItem(null)
  }

  return(
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelected ={handleSelected} selectedItem={selectedItem}  />
        {/* <FormAddForm/> */}
        {showAddFriend && <FormAddFriends onAddFriend={handleAddFriend}/>}
        <button className="button" onClick={handleShowFriend}  >{showAddFriend ? "Tutup" : "Tambah Teman" }  </button>
      </div>
       {selectedItem && <FormSplitBill selectedItem={selectedItem} onSplitBill={handleSplitBill}/>}
    </div>
  );
}