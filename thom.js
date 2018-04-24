const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('ok');
  var y = Math.floor((Math.random() * 4) + 1);
  if (y == 1) {
    client.user.setGame('CR78');
  } else if (y == 2) {
    client.user.setGame('the glmng');
  } else if (y == 3) {
    client.user.setGame('a song');
  } else if (y == 4) {
    client.user.setGame('with fans feelings');
  }
 
   
});
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'marco') {
    msg.channel.sendMessage('but did he met Jone?');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'h' && msg.author.bot === false) {
    msg.channel.sendMessage('h');
  }
});
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hi thom') {
    msg.channel.sendMessage('hello');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'thm bot') {
    msg.channel.sendMessage('thats me');
}
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'jonny') {
    var z = Math.floor((Math.random() * 2) + 1);
    if (z == 1) {
        msg.channel.sendMessage('FASTER');
    } else {
        msg.channel.sendMessage('Yes! Oh Yes!');
    }
  }
 
  });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is your mother') {
    msg.channel.sendMessage('its brocc, probably');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'good bot') {
    msg.channel.sendMessage('beep boop!');
  }
 
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bad bot') {
    msg.channel.sendMessage('some fucking people');
  }
 
 });
 
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'play creep') {
    msg.channel.sendMessage('did someone say wonderwall');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ok computer') {
    msg.channel.sendMessage('a good album.');
  }
 
 });
 
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'charlie day') {
    var x = Math.floor((Math.random() * 5) + 1);
    if (x == 1) {
        msg.channel.sendMessage('zyta stop');
    } else if (x == 2) {
        msg.channel.sendMessage('Charles Peckham Day (born February 9, 1976) is an American actor, screenwriter, producer, comedian, and musician. He is best known for playing Charlie Kelly on Its Always Sunny in Philadelphia');
    } else if (x == 3) {
        msg.channel.sendMessage('zyta i swear to god');
    } else if (x == 4) {
        msg.channel.sendMessage('dayman! aaah! fighter of the nightman! aaah!');
    } else if (x == 5) {
        msg.channel.sendMessage('does your cat make too much noise all the time?');
    }
 
 }
 
 });
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'thm bot joke') {
    var x = Math.floor((Math.random() * 8) + 1);
    if (x == 1) {
        msg.channel.sendMessage('your life');
    } else if (x == 2) {
        msg.channel.sendMessage('pablo honey is a bad album');
    } else if (x == 3) {
        msg.channel.sendMessage('are you a subterrean homesick alien? because im uptight as fuck.');
    } else if (x == 4) {
        msg.channel.sendMessage('whats my favorite part of a pencil? the eraser.');
    } else if (x == 5) {
        msg.channel.sendMessage('what is the synonym of an incel? a radiohead fan.');
    } else if (x == 6) {
        msg.channel.sendMessage('what is long, noisey and talentless? ed.');
    } else if (x == 7) {
        msg.channel.sendMessage('why did the hairdresser kicked out the client? her hitler hairdo made them ill.');
    } else if (x == 8) {
        msg.channel.sendMessage('how to calm an anxious person? there there!');
    }
 
 }
 
 });
 
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'thm bot play fitter happier') {
    msg.channel.sendMessage('Fitter happier, More productive, Comfortable, Not drinking too much',{tts: true});
  }
 
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'thm bot play moonbase alpha') {
    msg.channel.sendMessage('john madden, john madden!, john madden!',{tts: true});
  }
 
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'are you ok?') {
    var x = Math.floor((Math.random() * 5) + 1);
    if (x == 1) {
        msg.channel.sendMessage('my computer is not! my computer is not AAAAAAH!');
    } else if (x == 2) {
        msg.channel.sendMessage('absolutely not <:thom:414923786517741600>');
    } else if (x == 3) {
        msg.channel.sendMessage('<:glasses:306184389816221697>');
    } else if (x == 4) {
        msg.channel.sendMessage('are you???');
    } else if (x == 5) {
        msg.channel.sendMessage('<:angery:304024379245723650>');
    }
 
 }
 
 });
 
 
client.on('message', msg => {
  if (msg.content.toLowerCase().includes('thm bot pick radiohead album')) {
    var x = Math.floor((Math.random() * 9) + 1);
    if (x == 1) {
        msg.channel.sendMessage('pablo honey!');
    } else if (x == 2) {
        msg.channel.sendMessage('the bends!');
    } else if (x == 3) {
        msg.channel.sendMessage('ok computer!');
    } else if (x == 4) {
        msg.channel.sendMessage('kid a!');
    } else if (x == 5) {
        msg.channel.sendMessage('amnesiac!');
    } else if (x == 6) {
        msg.channel.sendMessage('hail to the thief!');
    } else if (x == 7) {
        msg.channel.sendMessage('in rainbows!');
    } else if (x == 8) {
        msg.channel.sendMessage('the king of limbs!');
    } else if (x == 9) {
        msg.channel.sendMessage('a moon shaped pool!');
    }
 
 }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'fat') {
   msg.channel.sendMessage('UGLY');
    msg.channel.sendMessage('DEAD');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is phil?') {
    msg.channel.sendMessage('who?????');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is ed?') {
    msg.channel.sendMessage('hh...sexy');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is jonny?') {
    msg.channel.sendMessage('FASTER!!!!!!');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is clive?') {
    msg.channel.sendMessage('some bald egg');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is cr78?') {
    msg.channel.sendMessage('the greatest radiohead member.');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is colin?') {
    msg.channel.sendMessage('<:colon:348932972491309066>');
  }
 
 });
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'who is thom?') {
    msg.channel.sendMessage('uhh that would be me');
  }
 
 
});
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tweet') {
    var x = Math.floor((Math.random() * 20) + 1);
    if (x == 1) {
        msg.channel.sendMessage('double scoops for everyone');
    } else if (x == 2) {
        msg.channel.sendMessage('... if pushed');
    } else if (x == 3) {
        msg.channel.sendMessage('they went that-a-way');
    } else if (x == 4) {
        msg.channel.sendMessage('fake beard pirates');
    } else if (x == 5) {
        msg.channel.sendMessage('backwards glove puppets');
    } else if (x == 6) {
        msg.channel.sendMessage('ive noticed that the words are all fake');
    } else if (x == 7) {
        msg.channel.sendMessage('brutalised');
    } else if (x == 8) {
        msg.channel.sendMessage('doping');
    } else if (x == 9) {
        msg.channel.sendMessage('talk to the cutout');
    } else if (x == 10) {
        msg.channel.sendMessage('here comes the paper adder');
    } else if (x == 11) {
        msg.channel.sendMessage('even the echo refused to listen');
    } else if (x == 12) {
        msg.channel.sendMessage('deflect reflect in a void');
    } else if (x == 13) {
        msg.channel.sendMessage('when this message ends');
    } else if (x == 14) {
        msg.channel.sendMessage('chewing on a leaf');
    } else if (x == 15) {
        msg.channel.sendMessage('unglued');
    } else if (x == 16) {
        msg.channel.sendMessage('isnt that a pity');
    } else if (x == 17) {
        msg.channel.sendMessage('not fit for office');
    } else if (x == 18) {
        msg.channel.sendMessage('they hear voices warning of danger');
    } else if (x == 19) {
        msg.channel.sendMessage('do you see his smile?');
    } else if (x == 20) {
        msg.channel.sendMessage('disinformation');
    }
 
  }
});
 
 
 
 
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'how are you thm bot?') {
    var x = Math.floor((Math.random() * 20) + 1);
    if (x == 1) {
        msg.channel.sendMessage('s.a.d.');
    } else if (x == 2) {
        msg.channel.sendMessage('no alarms and no surprises please');
    } else if (x == 3) {
        msg.channel.sendMessage('im fine but i might be wrong');
    } else if (x == 4) {
        msg.channel.sendMessage('fat ugly dead');
    } else if (x == 5) {
        msg.channel.sendMessage('everything is in its right place bitch');
    } else if (x == 6) {
        msg.channel.sendMessage('in limbo');
    } else if (x == 7) {
        msg.channel.sendMessage('fit and happy');
    } else if (x == 8) {
        msg.channel.sendMessage('nothing much... steven');
    } else if (x == 9) {
        msg.channel.sendMessage('buy tkol rmx1234567 on itunes');
    } else if (x == 10) {
        msg.channel.sendMessage('*gets shot* uh oh i wish i was bulletproof');
    } else if (x == 11) {
        msg.channel.sendMessage('how do YOU?');
    } else if (x == 12) {
        msg.channel.sendMessage('i cant');
    } else if (x == 13) {
        msg.channel.sendMessage('daydreaming');
    } else if (x == 14) {
        msg.channel.sendMessage('kinetic');
    } else if (x == 15) {
        msg.channel.sendMessage('let down and hanging around');
    } else if (x == 16) {
        msg.channel.sendMessage('ok');
    } else if (x == 17) {
        msg.channel.sendMessage('FERAL');
    } else if (x == 18) {
        msg.channel.sendMessage('thom yorke is currently not responding to your questions as he is sleeping. zzz');
    } else if (x == 19) {
        msg.channel.sendMessage('who cares how i feel');
    } else if (x == 20) {
        msg.channel.sendMessage('no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no no');
    }
 
  }
});
 
client.on('message', msg => {
  if (msg.content.toLowerCase().includes('thm bot pick radiohead song')) {
    var x = Math.floor((Math.random() * 163) + 1);
    if (x == 1) {
        msg.channel.sendMessage('(Nice Dream)');
    } else if (x == 2) {
        msg.channel.sendMessage('15 Step');
    } else if (x == 3) {
        msg.channel.sendMessage('2+2=5');
    } else if (x == 4) {
        msg.channel.sendMessage('4 Minute Warning');
    } else if (x == 5) {
        msg.channel.sendMessage('A Punchup at a Wedding');
    } else if (x == 6) {
        msg.channel.sendMessage('A Reminder');
    } else if (x == 7) {
        msg.channel.sendMessage('A Wolf at the Door');
    } else if (x == 8) {
        msg.channel.sendMessage('Airbag');
    } else if (x == 9) {
        msg.channel.sendMessage('All I Need');
    } else if (x == 10) {
        msg.channel.sendMessage('Anyone Can Play Guitar');
    } else if (x == 11) {
        msg.channel.sendMessage('Are You Someone?');
    } else if (x == 12) {
        msg.channel.sendMessage('Attention');
    } else if (x == 13) {
        msg.channel.sendMessage('Backdrifts');
    } else if (x == 14) {
        msg.channel.sendMessage('Banana Co.');
    } else if (x == 15) {
        msg.channel.sendMessage('Bangers + Mash');
    } else if (x == 16) {
        msg.channel.sendMessage('Bishops Robes');
    } else if (x == 17) {
        msg.channel.sendMessage('Black Star');
    } else if (x == 18) {
        msg.channel.sendMessage('Bloom');
    } else if (x == 19) {
        msg.channel.sendMessage('Blow Out');
    } else if (x == 21) {
        msg.channel.sendMessage('Bodysnatchers');
    } else if (x == 22) {
        msg.channel.sendMessage('Bones');
    } else if (x == 23) {
        msg.channel.sendMessage('Bullet Proof..I Wish I Was');
    } else if (x == 24) {
        msg.channel.sendMessage('Burn the Witch');
    } else if (x == 25) {
        msg.channel.sendMessage('Climbing Up the Walls');
    }  else if (x == 26) {
        msg.channel.sendMessage('Codex');
    }  else if (x == 27) {
        msg.channel.sendMessage('Coke Babies');
    }  else if (x == 28) {
        msg.channel.sendMessage('Creep');
    }  else if (x == 29) {
        msg.channel.sendMessage('Cuttooth');
    }  else if (x == 30) {
        msg.channel.sendMessage('Daydreaming');
    }  else if (x == 31) {
        msg.channel.sendMessage('Decks Dark');
    }  else if (x == 32) {
        msg.channel.sendMessage('Desert Island Disk');
    }  else if (x == 33) {
        msg.channel.sendMessage('Dollars and Cents');
    }  else if (x == 34) {
        msg.channel.sendMessage('Down Is the New Up');
    }  else if (x == 35) {
        msg.channel.sendMessage('Electioneering');
    }  else if (x == 36) {
        msg.channel.sendMessage('Everything in Its Right Place');
    }  else if (x == 37) {
        msg.channel.sendMessage('Exit Music (For a Film)');
    }  else if (x == 38) {
        msg.channel.sendMessage('Faithless, the Wonder Boy');
    }  else if (x == 39) {
        msg.channel.sendMessage('Fake Plastic Trees');
    }  else if (x == 40) {
        msg.channel.sendMessage('Fast-Track');
    }  else if (x == 41) {
        msg.channel.sendMessage('Faust Arp');
    }  else if (x == 42) {
        msg.channel.sendMessage('Feral');
    }  else if (x == 43) {
        msg.channel.sendMessage('Fitter Happier');
    }  else if (x == 44) {
        msg.channel.sendMessage('Fog');
    }  else if (x == 45) {
        msg.channel.sendMessage('Ful Stop');
    }  else if (x == 46) {
        msg.channel.sendMessage('Gagging Order');
    }  else if (x == 47) {
        msg.channel.sendMessage('Give Up the Ghost');
    }  else if (x == 48) {
        msg.channel.sendMessage('Glass Eyes');
    }  else if (x == 49) {
        msg.channel.sendMessage('Go Slowly');
    }  else if (x == 50) {
        msg.channel.sendMessage('Go to Sleep');
    }  else if (x == 51) {
        msg.channel.sendMessage('Harry Patch (In Memory Of)');
    }  else if (x == 52) {
        msg.channel.sendMessage('High and Dry');
    }  else if (x == 53) {
        msg.channel.sendMessage('House of Cards');
    }  else if (x == 54) {
        msg.channel.sendMessage('How Can You Be Sure?');
    }  else if (x == 55) {
        msg.channel.sendMessage('How Do You?');
    }  else if (x == 56) {
        msg.channel.sendMessage('How I Made My Millions');
    }  else if (x == 57) {
        msg.channel.sendMessage('How to Disappear Completely');
    }  else if (x == 58) {
        msg.channel.sendMessage('Hunting Bears');
    }  else if (x == 59) {
        msg.channel.sendMessage('I Am a Wicked Child');
    }  else if (x == 60) {
        msg.channel.sendMessage('I Am Citizen Insane');
    }  else if (x == 61) {
        msg.channel.sendMessage('I Cant');
    }  else if (x == 62) {
        msg.channel.sendMessage('I Might Be Wrong');
    }  else if (x == 63) {
        msg.channel.sendMessage('I Promise');
    }  else if (x == 64) {
        msg.channel.sendMessage('I Want None of This');
    }  else if (x == 65) {
        msg.channel.sendMessage('I Will');
    }  else if (x == 66) {
        msg.channel.sendMessage('Identikit');
    }  else if (x == 67) {
        msg.channel.sendMessage('Idioteque');
    }  else if (x == 68) {
        msg.channel.sendMessage('Ill Wind');
    }  else if (x == 69) {
        msg.channel.sendMessage('In Limbo');
    }  else if (x == 70) {
        msg.channel.sendMessage('India Rubber');
    }  else if (x == 71) {
        msg.channel.sendMessage('Jigsaw Falling into Place');
    }  else if (x == 72) {
        msg.channel.sendMessage('Just');
    }  else if (x == 73) {
        msg.channel.sendMessage('Karma Police');
    }  else if (x == 74) {
        msg.channel.sendMessage('Kid A');
    }  else if (x == 75) {
        msg.channel.sendMessage('Killer Cars');
    }  else if (x == 76) {
        msg.channel.sendMessage('Kinetic');
    }  else if (x == 77) {
        msg.channel.sendMessage('Knives Out');
    }  else if (x == 78) {
        msg.channel.sendMessage('Last Flowers');
    }  else if (x == 79) {
        msg.channel.sendMessage('Let Down');
    }  else if (x == 80) {
        msg.channel.sendMessage('Lewis (Mistreated)');
    }  else if (x == 81) {
        msg.channel.sendMessage('Life in a Glasshouse');
    }  else if (x == 82) {
        msg.channel.sendMessage('Lift');
    }  else if (x == 83) {
        msg.channel.sendMessage('Like Spinning Plates');
    }  else if (x == 84) {
        msg.channel.sendMessage('Little by Little');
    }  else if (x == 85) {
        msg.channel.sendMessage('Lotus Flower');
    }  else if (x == 86) {
        msg.channel.sendMessage('Lozenge of Love');
    }  else if (x == 87) {
        msg.channel.sendMessage('Lucky');
    }  else if (x == 88) {
        msg.channel.sendMessage('Lull');
    }  else if (x == 99) {
        msg.channel.sendMessage('Lurgee');
    }  else if (x == 90) {
        msg.channel.sendMessage('Man of War');
    }   else if (x == 91) {
        msg.channel.sendMessage('Maquiladora');
    }  else if (x == 92) {
        msg.channel.sendMessage('Melatonin');
    }  else if (x == 93) {
        msg.channel.sendMessage('Million Dollar Question');
    }  else if (x == 94) {
        msg.channel.sendMessage('MK 1');
    }  else if (x == 95) {
        msg.channel.sendMessage('MK 2');
    }  else if (x == 96) {
        msg.channel.sendMessage('Molasses');
    }  else if (x == 97) {
        msg.channel.sendMessage('Morning Bell');
    }  else if (x == 98) {
        msg.channel.sendMessage('Morning Bell/Amnesiac');
    }  else if (x == 99) {
        msg.channel.sendMessage('Morning Mr Magpie');
    }  else if (x == 100) {
        msg.channel.sendMessage('Motion Picture Soundtrack');
    }  else if (x == 101) {
        msg.channel.sendMessage('My Iron Lung');
    }  else if (x == 102) {
        msg.channel.sendMessage('Myxomatosis');
    }  else if (x == 103) {
        msg.channel.sendMessage('No Surprises');
    }  else if (x == 104) {
        msg.channel.sendMessage('Nude');
    }  else if (x == 105) {
        msg.channel.sendMessage('Optimistic');
    }  else if (x == 106) {
        msg.channel.sendMessage('Packt Like Sardines in a Crushd Tin Box');
    }  else if (x == 107) {
        msg.channel.sendMessage('Palo Alto');
    }  else if (x == 108) {
        msg.channel.sendMessage('Paperbag Writer');
    }  else if (x == 109) {
        msg.channel.sendMessage('Paranoid Android');
    }  else if (x == 110) {
        msg.channel.sendMessage('Pearly');
    }  else if (x == 111) {
        msg.channel.sendMessage('Permanent Daylight');
    }   else if (x == 112) {
        msg.channel.sendMessage('Planet Telex');
    }  else if (x == 113) {
        msg.channel.sendMessage('Polyethylene (Parts 1 & 2)');
    }  else if (x == 114) {
        msg.channel.sendMessage('Million Dollar Question');
    }  else if (x == 115) {
        msg.channel.sendMessage('Pop Is Dead');
    }  else if (x == 116) {
        msg.channel.sendMessage('Present Tense');
    }  else if (x == 117) {
        msg.channel.sendMessage('Prove Yourself');
    }  else if (x == 118) {
        msg.channel.sendMessage('Pulk/Pull Revolving Doors');
    }  else if (x == 119) {
        msg.channel.sendMessage('Punchdrunk Lovesick Singalong');
    }  else if (x == 120) {
        msg.channel.sendMessage('Pyramid Song');
    }  else if (x == 121) {
        msg.channel.sendMessage('Reckoner');
    }  else if (x == 122) {
        msg.channel.sendMessage('Ripcord');
    }  else if (x == 123) {
        msg.channel.sendMessage('Sail to the Moon');
    }  else if (x == 124) {
        msg.channel.sendMessage('Scatterbrain');
    }  else if (x == 125) {
        msg.channel.sendMessage('Separator');
    }  else if (x == 126) {
        msg.channel.sendMessage('Sit Down. Stand Up');
    }  else if (x == 127) {
        msg.channel.sendMessage('Spectre');
    }  else if (x == 128) {
        msg.channel.sendMessage('Staircase');
    }  else if (x == 129) {
        msg.channel.sendMessage('Stop Whispering');
    }  else if (x == 130) {
        msg.channel.sendMessage('Street Spirit (Fade Out)');
    }  else if (x == 131) {
        msg.channel.sendMessage('Stupid Car');
    }  else if (x == 132) {
        msg.channel.sendMessage('Subterranean Homesick Alien');
    }   else if (x == 133) {
        msg.channel.sendMessage('Sulk');
    }  else if (x == 134) {
        msg.channel.sendMessage('Supercollider');
    }  else if (x == 135) {
        msg.channel.sendMessage('Talk Show Host');
    }  else if (x == 136) {
        msg.channel.sendMessage('The Amazing Sounds of Orgy');
    }  else if (x == 137) {
        msg.channel.sendMessage('The Bends');
    }  else if (x == 138) {
        msg.channel.sendMessage('The Butcher');
    }  else if (x == 139) {
        msg.channel.sendMessage('The Daily Mail');
    }  else if (x == 140) {
        msg.channel.sendMessage('The Gloaming');
    }  else if (x == 141) {
        msg.channel.sendMessage('The National Anthem');
    }  else if (x == 142) {
        msg.channel.sendMessage('The Numbers');
    }  else if (x == 143) {
        msg.channel.sendMessage('The Tourist');
    }  else if (x == 144) {
        msg.channel.sendMessage('The Trickster');
    }  else if (x == 145) {
        msg.channel.sendMessage('There There');
    }  else if (x == 146) {
        msg.channel.sendMessage('These Are My Twisted Words');
    }  else if (x == 147) {
        msg.channel.sendMessage('Thinking About You');
    }  else if (x == 148) {
        msg.channel.sendMessage('Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief');
    }  else if (x == 149) {
        msg.channel.sendMessage('Trans-Atlantic Drawl');
    }  else if (x == 150) {
        msg.channel.sendMessage('Treefingers');
    }  else if (x == 151) {
        msg.channel.sendMessage('True Love Waits');
    }  else if (x == 152) {
        msg.channel.sendMessage('Up on the Ladder');
    }  else if (x == 153) {
        msg.channel.sendMessage('Vegetable');
    }  else if (x == 154) {
        msg.channel.sendMessage('Videotape');
    }  else if (x == 155) {
        msg.channel.sendMessage('We Suck Young Blood');
    }  else if (x == 156) {
        msg.channel.sendMessage('Weird Fishes/Arpeggi');
    }  else if (x == 157) {
        msg.channel.sendMessage('Where Bluebirds Fly');
    }  else if (x == 158) {
        msg.channel.sendMessage('Where I End and You Begin');
    }  else if (x == 159) {
        msg.channel.sendMessage('Worrywort');
    }  else if (x == 160) {
        msg.channel.sendMessage('Yes I Am');
    }  else if (x == 161) {
        msg.channel.sendMessage('You and Whose Army?');
    }  else if (x == 162) {
        msg.channel.sendMessage('You Never Wash Up After Yourself');
    }  else if (x == 163) {
        msg.channel.sendMessage('You');
    }  
 
 
 
  }
});
 
 
client.login(process.env.THMB);
