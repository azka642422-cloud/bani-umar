import { MemoryItem } from '../types';

export const memoriesData: MemoryItem[] = [
  {
    id: "m1",
    title: "The Legendary Bromo Road Trip",
    year: "2015",
    date: "July 2015",
    branchId: "branch-3",
    people: ["Pak Budi", "Ibu Ani", "Leo", "Maya"],
    location: "Mount Bromo, East Java",
    type: "trip",
    story: "Three cars packed with 15 family members. Car #2 ran out of radiator water in the middle of the steep slope. Uncle Budi used mineral water bottles collected from all passengers to save the day.",
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
    ],
    funFact: "We drank instant coffee at 3 AM while shivering in mismatched jackets.",
    featured: true
  },
  {
    id: "m2",
    title: "Lebaran Feast of 2018",
    year: "2018",
    date: "June 2018",
    branchId: "branch-2",
    people: ["Bu Rini", "Keluarga Besar Umar"],
    location: "Grandma's House, Surabaya",
    type: "lebaram",
    story: "Opor ayam cooked in a giant cauldron that took 8 hours. The ketupat ran out by 10 AM because Cousin Fajar ate 7 portions in one sitting.",
    photos: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
    ],
    funFact: "Fajar was banned from approaching the ketupat basket for the rest of the day.",
    featured: true
  },
  {
    id: "m3",
    title: "The Backyard Camping Disaster",
    year: "2020",
    date: "December 2020",
    branchId: "branch-5",
    people: ["Pak Eko", "The Grandkids"],
    location: "Malang Backyard",
    type: "chaos",
    story: "Attempted to set up a 10-person tent during a sudden tropical downpour. The tent collapsed within 4 minutes, so everyone retreated to the living room and ate martabak on the floor.",
    photos: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800"
    ],
    funFact: "Indoor camping was voted better than outdoor camping by 100% of kids.",
    featured: false
  },
  {
    id: "m4",
    title: "Grandpa Umar's Bicycle Story",
    year: "1982",
    date: "September 1982",
    branchId: "branch-1",
    people: ["Kakek Umar", "Pak Slamet"],
    location: "Surabaya Streets",
    type: "oldphoto",
    story: "Kakek Umar teaching his children how to ride a massive old-school Batavus bicycle without brakes. If you couldn't stop, you crashed into the banana trees.",
    photos: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    ],
    funFact: "Nobody got seriously hurt, just a few bruised knees and lots of laughter.",
    featured: true
  }
];
