import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpsPage(){
    const history = useHistory();

    function addMeetUpHandler(meetUpData){
         //javascript function that allows http requests [.json required for firebase realtime database]
        fetch(
            '[Firebase-Link]',
            {
                method: 'POST',
                body: JSON.stringify(meetUpData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Add New MeetUp</h1>
        <NewMeetUpForm addMeetUp={addMeetUpHandler} />
    </section>
}

 export default NewMeetUpsPage;