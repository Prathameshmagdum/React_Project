const ContactUs = ()=> {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-2 p-2">
                Contact Us
            </h1>
            <form>
                <input className="border border-black m-2 p-2" placeholder="Name" />
                <input className="border border-black m-2 p-2" placeholder="Message"/>
                <button className="border border-black rounded-lg bg-gray-200 m-2 p-2">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;