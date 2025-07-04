export default function Form({place,setPlace}){
    
    function formSubmit(e){
        e.preventDefault();
        setPlace(e.target[0].value)
        
    }

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="place" className="m-2" > place </label>
            <input type="text" id="place" name="place" className="border-1 m-2 " />
            <br />
            <button type="submit" className="bg-blue-500 m-2 text-white p-2 rounded-xl">Submit</button>
        </form>
    )
}