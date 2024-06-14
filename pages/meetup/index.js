import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function index() {
  const router = useRouter();
  async function handleAddMeetUp(meetupData) {
    const respose = await fetch("/api/addMeetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });

    respose && router.push("/");
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetUp} />;
}

export default index;
