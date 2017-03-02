// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/journal-development');
const JournalEntry = require('../models/journal-entry');

const entries = [
  {
    title   : 'Day 1',
    content : 'Etiam eget dui fermentum, congue tellus sit amet, vehicula odio. Etiam porta consectetur quam vel congue. Nulla facilisi. Nam ullamcorper, dolor et tempor dignissim, justo orci ullamcorper massa, sagittis vestibulum velit lacus consectetur magna. Donec vehicula, enim vel pharetra venenatis, eros ex dictum mauris, nec fermentum nibh ipsum non nibh. Vestibulum iaculis nisi sed justo tincidunt interdum. Sed at malesuada risus, in facilisis erat. Vivamus a elit a metus auctor aliquet. Nullam aliquet ante et mollis viverra.',
  },{
    title   : 'Day 2',
    content : 'Aliquam mattis ante et purus facilisis mollis. Morbi fermentum, justo sit amet gravida luctus, orci tortor accumsan ipsum, et sagittis diam erat non urna. Nunc nisl libero, volutpat mattis massa eget, egestas aliquet massa. Pellentesque elementum lobortis consequat. Sed in lacus vitae lectus dignissim posuere a et sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sit amet nulla nisi. Mauris sed dolor blandit, feugiat nulla sit amet, bibendum ipsum. Pellentesque eu maximus lacus. Nunc facilisis pretium magna, vitae semper mauris. In varius maximus urna id consectetur. Maecenas tempor tortor ac nisl rhoncus pharetra. Sed at eleifend turpis, nec commodo sem. Nunc justo mi, scelerisque a risus ac, varius blandit odio. Mauris sagittis eros leo, ac rutrum nunc semper fermentum.',
  },{
    title   : 'Day 3',
    content : 'In luctus orci nulla, ac eleifend ligula luctus nec. Cras vitae arcu et est rutrum pharetra at eu sapien. Sed congue purus finibus elit iaculis faucibus. Sed pulvinar facilisis metus sed cursus. In suscipit, ligula sit amet mollis dapibus, sapien purus posuere tortor, non consectetur neque tellus at turpis. Proin congue imperdiet purus, quis eleifend enim porttitor sed. Nulla lobortis purus at commodo suscipit. Praesent nec ex luctus odio vestibulum condimentum. In quis risus sem. Etiam sed urna rutrum, lacinia mauris nec, hendrerit dui. Cras a accumsan sem, et faucibus lacus. Quisque nec ligula eu nibh porttitor varius vitae et nibh.',
  },{
    title   : 'Day 4',
    content : 'Fusce consequat mauris augue, nec porta quam pharetra non. Etiam pretium imperdiet nunc ut placerat. Phasellus ornare nisi eu tortor accumsan, id laoreet magna consectetur. Nunc vel ornare lectus, eget vulputate justo. Mauris elementum ullamcorper mi in efficitur. Donec eget pharetra nisl. Praesent fringilla lectus sit amet lectus malesuada rhoncus. Duis faucibus commodo erat, mollis pellentesque odio tempus ut.',
  },{
    title   : 'Day 5',
    content : 'Pellentesque nec est eros. Quisque metus metus, scelerisque sit amet porttitor et, dignissim id nisi. Duis sagittis gravida magna, et ultrices massa porta sed. Mauris ac velit vitae massa accumsan vehicula nec non odio. Nullam vel consequat leo, vel ullamcorper nulla. Maecenas vel mauris et odio faucibus sollicitudin. Vestibulum quis sapien vel leo accumsan auctor. Suspendisse potenti. In sollicitudin a justo in luctus. Duis vitae aliquam leo, lobortis vulputate diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean faucibus nisl id rhoncus lacinia. Donec condimentum nibh non justo pretium, eget sagittis nisl imperdiet. Vivamus posuere eget dolor id mattis. Donec efficitur velit vel arcu eleifend, eget viverra arcu tempus.',
  },{
    title   : 'Day 6',
    content : 'Maecenas maximus risus leo, id elementum elit lacinia tempus. Proin eget augue tellus. Pellentesque laoreet, leo in lacinia pretium, odio purus vestibulum urna, a vehicula sapien tortor dictum arcu. Cras a diam orci. Nulla eget enim tellus. Curabitur in neque in nulla fringilla faucibus sed et mi. Donec tincidunt lorem sit amet aliquet auctor. Nam et tortor tristique, posuere nulla et, tincidunt dui. Proin molestie magna ut urna ultricies auctor ut in augue. Mauris semper mi purus, non commodo diam luctus eu.',
  },{
    title   : 'Day 7',
    content : 'Praesent volutpat diam id nunc suscipit sagittis. Sed imperdiet at dolor at lacinia. Maecenas accumsan sem id est euismod porta. Suspendisse ultrices lacus id leo hendrerit, et condimentum risus ultricies. Duis tristique ultricies mi nec eleifend. Aenean ut augue non purus pharetra tincidunt. Donec eu sapien dolor.',
  },{
    title   : 'Day 8',
    content : 'Duis vitae laoreet magna. Nunc nisi turpis, egestas ac placerat in, venenatis quis nisi. Pellentesque rutrum felis nec metus pulvinar suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper dignissim orci in vehicula. Pellentesque sit amet dui fringilla, feugiat ante non, mollis nisi. Nam a fringilla sapien, nec posuere felis.',
  },{
    title   : 'Day 9',
    content : 'Sed lacinia pretium viverra. Curabitur finibus nec orci at molestie. Aenean in pharetra elit, ac sollicitudin ante. Proin eleifend mi id tempus euismod. Sed eleifend, ipsum a rutrum scelerisque, est diam ullamcorper tellus, eget rhoncus nisi ex nec metus. Vestibulum pulvinar purus mauris, a gravida metus vestibulum at. Sed semper nisi eget elit porttitor, vel sodales sapien venenatis. Ut pellentesque nisl vel faucibus imperdiet. Cras at odio diam. Duis massa sem, fermentum eget bibendum ut, molestie sed nisi. Sed a risus nec metus tristique hendrerit. Etiam ut orci et erat tempor blandit.',
  },{
    title   : 'Day 10',
    content : 'Nulla et efficitur lorem. Nulla dictum congue facilisis. Vivamus quis purus ac augue condimentum dignissim. Morbi at nibh eu felis condimentum pretium ut non libero. Integer eget tempor arcu. Integer ligula metus, lobortis sed pretium quis, euismod ut mauris. Vestibulum dictum consectetur felis. Praesent consectetur magna nisl, accumsan mattis sapien volutpat non. Curabitur id nulla sed ligula scelerisque blandit et sed lacus. Praesent porta dapibus diam, non molestie dolor gravida in.',
  },
];

JournalEntry.remove({}, (err, docs) => {
  if (err) { throw err };
  JournalEntry.create(entries, (err, docs) => {
    if (err) { throw err };

    docs.forEach( (entries) => {
      console.log(entries.title)
    })
    mongoose.connection.close();
  });
})
