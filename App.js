const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://user1:123@cluster0.9rzsy.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;
    console.log("Bağlantı Kuruldu");
    var dbo = db.db("MyFirstDB");
    dbo
      .collection("SampleCollection")
      .insertOne(
            {
            name: "Duygu",
            surname: "Özkan",
            subject: "Nodejs üzerinden mongodb bağlantısı",
            },
        function (err) {
          if (err) throw err;
          console.log("insert başarılı");
        }
      );
});
