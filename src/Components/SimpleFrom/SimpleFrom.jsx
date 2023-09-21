

const SimpleFrom = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.emile.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="text" name="emile"/>
                <br />
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    );
};

export default SimpleFrom;