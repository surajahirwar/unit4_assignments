const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/Library-system")
};

// USER SCHEMA
// Step 1 :- creating the schema
const authorSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: false },
    book_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const  Author = mongoose.model("author", authorSchema); // user => users

app.get("/author", async (req, res) => {
  try {
    const main_sectioln = await Author.find({}).lean().exec();

    return res.status(200).send(main_sectioln); // []
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Something went wrong .. try again later" });
  }
});

app.post("/author", async (req, res) => {
  try {
    const main_sectioln = await Author.create(req.body);

    return res.status(201).send(main_sectioln);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/author/:id", async (req, res) => {
  try {
    const main_sectioln = await Author.findById(req.params.id).lean().exec();

    return res.status(200).send(main_sectioln);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/author/:id", async (req, res) => {
  try {
    const main_sectioln = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(main_sectioln);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/author/:id", async (req, res) => {
  try {
    const main_sectioln = await Author.findByIdAndDelete(req.params.id).lean().exec();
    // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(main_sectioln);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


const BookSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    contains: { type: String, required: true },
    body: { type: String, required: false },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
const Book = mongoose.model("books", BookSchema);


app.get("/books", async (req, res) => {
  try {
    const  book_name = await Book.find().lean().exec();

    return res.status(200).send(book_name);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


app.post("/books", async (req, res) => {
  try {
    const book_name = await Book.create(req.body);

    return res.status(200).send(book_name);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book_name = await Book.findById(req.params.id).lean().exec();

    return res.status(200).send(book_name);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book_name = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(book_name);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book_name = await Book.findByIdAndDelete(req.params.id).lean().exec();
    // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(book_name);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

const sectionSchema = mongoose.Schema(
  {
    // name: { type: String, required: true },
    // contains: { type: String, required: true },
    // body: { type: String, required: false },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
const Section = mongoose.model("section", sectionSchema);


app.get("/section", async (req, res) => {
  try {
    const  section_main = await Section.find().lean().exec();


    return res.status(200).send(section_main);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


app.post("/section", async (req, res) => {
  try {
    const section_main = await Section.create(req.body);

    return res.status(200).send(section_main);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.get("/section/:id", async (req, res) => {
  try {
    const section_main = await Section.findById(req.params.id).lean().exec();

    return res.status(200).send(section_main);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.patch("/section/:id", async (req, res) => {
  try {
    const section_main = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(section_main);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.delete("/section/:id", async (req, res) => {
  try {
    const section_main = await Section.findByIdAndDelete(req.params.id).lean().exec();
    // db.users.deleteOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(section_main);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});



app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
