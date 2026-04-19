export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({
      error: "Number is required"
    });
  }

  try {
    const response = await fetch(`https://exploits-api.site/anish/api.php?key=number&num=${num}`);
    const data = await response.json();

    return res.status(200).json({
      owner: "Monu API",
      success: true,
      result: data
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}
