import { useState } from "react"

export default function FormSplitBill({ selectedItem, onSplitBill }){
    const [amout, setAmout] = useState("");
    const [Mybill, setMybill] = useState("")
    const friendBill = amout ? amout-Mybill : "";
    const [whoIspaying, setWhoisPaying] = useState("user")

    function handleSubmit (e){
        e.preventDefault();
        if(!amout || !Mybill) return;
        onSplitBill(whoIspaying === "user" ? friendBill: -Mybill  );
    }


    return(
        <form action="" className="form-split-bill"  onSubmit={handleSubmit}>
            <h2>Patungan bareng si {selectedItem.name}</h2>
            <label htmlFor="">💲Total biaya</label>
                <input type="text" name="" id=""

                    value={amout}
                    onChange={(e) => setAmout(e.target.value)}
                />

            <label htmlFor="">💲Tagihan kamu</label>    
                <input type="text" name="" id=""


                value={Mybill}
                onChange={(e) => setMybill(e.target.value)}
                />

             <label htmlFor="">💲Tagihan si {selectedItem.name}</label>
                <input type="text" name="" id="" disabled

                    value={friendBill}
                />   

             <label htmlFor="">💲Ditalangin sama si {selectedItem.name}</label>
                <select 
                value={whoIspaying}
                onChange={(e) => setWhoisPaying(e.target.value)}
                
                >
                    <option value="user">kamu</option>
                    <option value="friend">si {selectedItem.name}</option>
                </select>   

                <button className="button">Tambah</button>
        </form>
    )
}