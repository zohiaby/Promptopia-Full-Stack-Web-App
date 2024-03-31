// Import the Prompt model
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// In your server-side code
export const GET = async (request, { params }) => {
  try {
    // Connect to the MongoDB database
    await connectToDB();

    // Fetch prompts using the model
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    /* console.log("Fetched prompts:", prompts)*/
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching prompts:", error);
    return new Response("Failed to fetch prompts", {
      status: 500,
    });
  }
};
