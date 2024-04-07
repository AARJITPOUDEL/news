import dbConnect from "../../../utils/dbConnect";
import News from "../../../models/News";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { image, headline, description } = req.body;

      if (!image || !headline || !description) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      const news = new News({ image, headline, description });
      await news.save();
      res.status(201).json({ success: true, data: news });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
