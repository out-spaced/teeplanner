const mongoose = require('mongoose');
const colors = require('colors');
mongoose.connect('mongodb://localhost/teeplanner', {useUnifiedTopology: true, useNewUrlParser: true});

let partySchema = mongoose.Schema({
  userName: String,
  userId: Number,
  partyId: Number,
  guestList: [
    {
      name: String,
      email: String, unique:true
    }
  ],
  url: String,
  minRequired: Number,
});

let Party = mongoose.model('Party', partySchema);

let save = async (party) => {

  //let alreadyThere = await Party.find( {partyId: party.id} ).exec().catch(new Error('error'))

  console.log('Saving party...'.green)

  if (!alreadyThere.length) {
    let newDbEntry = new Party();

    newDbEntry.userName = party.userName;
    newDbEntry.userId = party.userId;
    // etc...

    let result = await newDbEntry.save();
    return result;
  } else {
    console.log('Party already exists!'.yellow)
  }
}


let retrieve = async () => {
  console.log('retrieving results...'.yellow)
  var results;
  const query = Party.find();
  let options = {

  }
  query.setOptions(options)

  results = await query.exec();
  return results;
}

module.exports.save = save;
module.exports.retrieve = retrieve;