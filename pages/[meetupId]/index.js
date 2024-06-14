import React from "react";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";
import { connectMongoDB } from "../../utils/mongo";
import { ObjectId } from "mongodb";

function index(props) {
  const { image, title, description } = props.meetUpdata;
  return <MeetUpDetail image={image} title={title} description={description} />;
}

export async function getStaticPaths() {
  const { db, client } = await connectMongoDB();
  const meetUps = db.collection("meetUp");

  const meetUPIDS = await meetUps.find({}, { _id: 1 }).toArray();
  const paths = meetUPIDS.map((m) => ({
    params: { meetupId: m._id.toString() },
  }));

  client.close();

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps(context) {
  const id = context.params.meetupId;

  const { db, client } = await connectMongoDB();
  const meetUps = db.collection("meetUp");
  if (meetUps) {
    const meetUpdata = await meetUps.findOne({ _id: new ObjectId(id) });
    client.close();
    return {
      props: {
        meetUpdata: {
          id: meetUpdata._id.toString(),
          title: meetUpdata.title,
          image: meetUpdata.image,
          address: meetUpdata.address,
          description: meetUpdata.description,
        },
      },
    };
  }
}

export default index;
