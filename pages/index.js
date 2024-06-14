import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { connectMongoDB } from "../utils/mongo";

const dummyMeetups = [
  {
    id: 1,
    image:
      "https://secure.meetupstatic.com/photos/event/4/d/2/5/600_519619749.webp?w=384",
    title: "Tech Innovators Summit",
    address: "123 Tech Avenue, Silicon Valley, CA",
  },
  {
    id: 2,
    image:
      "https://secure.meetupstatic.com/photos/event/4/d/2/5/600_519619749.webp?w=384",
    title: "Startup Networking Night",
    address: "456 Startup Street, San Francisco, CA",
  },
  {
    id: 3,
    image:
      "https://secure.meetupstatic.com/photos/event/4/d/2/5/600_519619749.webp?w=384",
    title: "AI and Machine Learning Expo",
    address: "789 AI Blvd, Boston, MA",
  },
  {
    id: 4,
    image:
      "https://secure.meetupstatic.com/photos/event/4/d/2/5/600_519619749.webp?w=384",
    title: "Blockchain Developers Conference",
    address: "101 Blockchain Road, New York, NY",
  },
];

function Index(props) {
  const { meetUpData } = props;
  return <MeetupList meetups={meetUpData || dummyMeetups} />;
}

export async function getStaticProps() {
  try {
    const { db, client } = await connectMongoDB();
    const meetUps = db.collection("meetUp");

    let meetUpData = [];
    if (meetUps) {
      meetUpData = await meetUps.find().toArray();
    }

    const mappedMeetup = meetUpData.map((m) => ({
      title: m.title,
      image: m.image,
      id: m._id.toString(),
    }));

    client.close();
    return {
      props: {
        meetUpData: mappedMeetup,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Failed to fetch meetups", error);
    return {
      props: {
        meetUpData: null,
      },
    };
  }
}

export default Index;
