
var mySigns = [
  {
    sign: "Aquarius Jan 20 - Feb 18",
    picture: "http://www.freepngimg.com/thumb/aquarius/7-2-aquarius-png-hd-thumb.png",
    description: "Aquarians have a rebellious nature, and are eccentric, spontaneous and original. They are forward thinking and innovative. Aquarians are scientifically minded and logical, and confident in manner. They can appear to be emotionally detached, yet they truly value social contact, adn the spirit of humanity."
  },
  {
    sign: "Pisces Feb 19 - Mar 20",
    picture: "http://www.freepngimg.com/thumb/pisces/8-2-pisces-picture-thumb.png",
    description: "Pisces is a watery sign, concerned with subtle emotions, and secret mystical depths. They are friendly and likeable, and yet can be very moody and intospective as well. Pisceans are not entirely at home in this world. They are dreamy and full of imagination, emotionally sensitive, and easily influenced by their environment."
  },
  {
    sign: "Aries Mar 21 - Apr 19",
    picture: "http://www.freepngimg.com/thumb/aries/1-2-aries-free-png-image-thumb.png",
    description: "Aries are energentic, forceful and outgoing. Like the energy of the first rush of springtime, they move into the world in a headstrong, pioneering way, and prefer starting to finishing. They tend to rush into things, and may also be impatient. They have great vitality and a tremendous need to be physically active."
  },
  {
    sign: "Taurus Apr 20 - May 20",
    picture: "http://www.freepngimg.com/thumb/taurus/10-2-taurus-png-file-thumb.png",
    description: "Taurus people revel in the pleasures of life. They crave the security and comfort of relaxing in the warmth of their home environment. They value the senses and the enjoyment of material things. They are willful and sometimes can be stubborn. With a large capacity for kindness, they are steadfastly devoted and loyal."
  },
  {
    sign: "Gemini May 21 - Jun 20",
    picture: "https://pbs.twimg.com/profile_images/474186633726545920/jVxNv2Av_400x400.png",
    description: "Gemini is the sign associasted with logical thought processes (based on duality) and the conscious mind. Geminis tend to be airy and intellectual, glib of tongue and curious about life and other people. They can experience two sides of things at the same time, and may tend to be flighty."
  },
  {
    sign: "Cancer Jun 21- Jul 22",
    picture: "https://www.pngarts.com/files/1/Cancer-Zodiac-PNG-Photo.png",
    description: "Cancerians are nurturing and protective of others. Their ruling planet is the Moon, and they tend to be moody, with constantly changing emotions. They are also likely to be security-conscious and highly value their home life. They may appear passive, and tend to rely on their feelings to make decisions. THey are subtle, rather than direct."
  },
  {
    sign: "Leo Jul 23 - Aug 22",
    picture: "http://www.freepngimg.com/thumb/leo/10-2-leo-png-hd-thumb.png",
    description: "Leos are likely to express themselves in dramatic, creative and assertive ways. Leos have great energy, courage and honesty. They are likely to be self-confident and maybe even a bit self-indulgent as they expect to be the center of attention, and often are. They also possess integrity, determination, and are natural leaders."
  },
  {
    sign: "Virgo Aug 23 - Sep 22",
    picture: "http://www.freepngimg.com/thumb/virgo/9-2-virgo-free-png-image-thumb.png",
    description: "Virgos tend to be very conscious of details. They are drawn to being of service to others and are concerned with health and well-being. They are likely to be neat and orderly, at least in some area of their life, although they may exhibit the opposite tendency in cases where they have not yet found their guiding principle of organization."
  },
  {
    sign: "Libra Sep 23 - Oct 22",
    picture: "http://www.freepngimg.com/thumb/libra/7-2-libra-download-png-thumb.png",
    description: "Libra is the sign of harmony and relationship and strives for balance between polarities. Libras are known for their good taste, elegance and charm. Their natural mode of living is in partnership with others. They are concernced with issues of social justice, and are natural diplomats. They may also struggle in making decisions."
  },
  {
    sign: "Scorpio Oct 23 - Nov 21",
    picture: "http://www.freepngimg.com/thumb/scorpio/1-2-scorpio-download-png-thumb.png",
    description: "Scorpios are intense and their emotions run deep. This sign is associated with sexual activity and with the transformative cycles of death and rebirth. Scorpios have great personal magnetism and great powers of persuasion or even the ability to coerce others. Their will is strong, and their depth of perception is powerful."
  },
  {
    sign: "Sagittarius Nov 22 - Dec 21",
    picture: "http://www.freepngimg.com/thumb/sagittarius/3-2-sagittarius-png-clipart-thumb.png",
    description: "Sagittarius is an optimistic sign associated with expansion, idealism, religion and philosophy. They are direct and forthright, good natured and affirmative in their outlook. They tend to speak with a blunt tongue, which can get them into trounble at times. Sagittarians display honesty, humor, and a strong moral nature."
  },
  {
    sign: "Capricorn Dec 22 - Jan 19",
    picture: "http://www.freepngimg.com/thumb/capricorn/6-2-capricorn-png-clipart-thumb.png",
    description: "Capricorns are ambitious, practical, and are likely to have an excellent sense of social responsibility. They also tend to be conscious of social mores, perhaps to the point of over-concern, and can suffer from feeling insecure. They are driven, yet cautious, which allows them to advance slowly and steadily to the top."
  }
];

var myDropdown = document.getElementById("myDropdown");

// When the user clicks on the option value, the information about the sign pops up
myDropdown.onchange = function() {

  console.log("Function started");
  var sign = document.getElementById("sign");
  var picture = document.getElementById("picture");
  var description = document.getElementById("description");
  var myDropdownValue = document.getElementById("myDropdown").value;   

  for(var i=0; i < mySigns.length; i++) {
// Finds a match in the signs array when a user selects their sign in the dropdown
    if (myDropdownValue == mySigns[i].sign) {

        console.log("success");

        sign.textContent = mySigns[i].sign;
        picture.src = mySigns[i].picture;
        description.innerHTML = mySigns[i].description;
    }
  }
}

    
     







