import Friend from "./Friend";

export default function FriendList({ friends,onSelected,selectedItem }){
    return(
        <ul>
            {friends.map((friend, index) => (
                    <Friend friend={friend}  key={index}  onSelected={onSelected}  selectedItem={selectedItem} />
            ))}
        </ul>
    )
}