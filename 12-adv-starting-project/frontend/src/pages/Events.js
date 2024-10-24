import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  return <>{<EventsList events={data.events} />}</>;
}

export default EventsPage;

//Get
export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}
