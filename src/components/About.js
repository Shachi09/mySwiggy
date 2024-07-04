import UserClass from "./UserClass";
// import UserFunc from "./UserFunc";

const About = () => {
    return (
        <>
            <div>
                {/* <h1>About</h1>
                <h2>This is about us page</h2>
                <p> Know more about us</p> */}

                {/* <UserFunc userName={"Shachifrom Function"} location={"Pune"} /> */}
                <UserClass userName={"Shachifrom Class"} location={"Nagpur"} />
            </div>

        </>
    );
}

export default About;