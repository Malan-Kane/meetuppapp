import { useState, useEffect } from "react";

import MeetUpList from "../components/meetups/MeetUpList";

function AllMeetUpsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  useEffect(() => {
    fetch(
      '[Firebase-Link]'
    ).then (response => {
      return response.json()
    }).then(data => {
      const meetups = [];

      for (const key in data){
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetUps(meetups);
    });
  }, []);

  

    if(isLoading){
      return <section>
        <p>Loading...</p>
      </section>
    }

    return <section>
        <h1>All MeetUps!</h1>

        <MeetUpList meetups={loadedMeetUps}/>
    </section>;
}

 export default AllMeetUpsPage;