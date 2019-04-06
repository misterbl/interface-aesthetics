import upperFaceBotox from "../assets/upper-face-botox-model.jpg";
import handsOn from "../assets/Hands-on.svg";
import supportLearning from "../assets/Support-learning.svg";
import certificate from "../assets/Certificate.svg";

const courses = [
  {
    id: 1,
    image: upperFaceBotox,
    title: "FOUNDATION COURSE IN BOTULINUM TOXIN & DERMAL FILLER",
    price: "£100",
    overview:
      "Our two-day course provides training in the key treatments of non-surgical aesthetics that you will be expected to perform as independent practitioners. Our innovative approach to competency-based training focuses on hands-on practical injecting on real patients in a supportive and friendly environment. ",
    days: [
      {
        description:
          "Day 1 is devoted to the use of Botulinum Toxin to the upper face:",
        details: ["Forehead", "Brow", "Eyes (“crows feet”)"]
      },
      {
        description:
          "Day 2 will cover the use of Dermal Filler to the face and lips:",
        details: [
          "Lip augmentation",
          "Nasolabial fold",
          "Marionette Lines",
          "Cheek bone augmentation"
        ]
      }
    ],
    information: [
      {
        image: handsOn,
        overview:
          "Hands-on practical training in all of the listed techniques:",
        details: [
          "Groups are limited to a maximum of 4 delegates, meaning greater exposure and more opportunities to perform techniques.",
          "Procedure-based learning, ensuring knowledge and practical skills are linked at every stage."
        ]
      },
      {
        image: supportLearning,
        overview: "A supportive learning environment:",
        details: [
          "We make it our business to ensure that you get the learning opportunities you need to meet the level expected of a Foundation Course graduate.",
          "Ongoing access to expert advice as you begin to practice independently with our exclusive Graduate Zone."
        ]
      },
      {
        image: certificate,
        overview:
          "Get practising immediately with our Foundation Certificate of Completion:",
        details: [
          "Graduates are able to obtain insurance with our partner Hamilton Fraser, the number one cosmetic insurance provider in the UK.",
          "Certificates are presented at the end of the two-day course, enabling you to take the first steps into the vast and exciting field of medical aesthetics."
        ]
      }
    ],
    moreInformation: [
      "We believe that our Foundation Course provides unrivalled levels of patient contact and hands-on injecting. Our philosophy focuses on developing competency to perform Foundation techniques safely and effectively. Many Foundation Courses on the market are delivered over a single day for both Botulinum Toxin and Dermal Filler. Furthermore, teaching is often in large groups and consists in observing most, if not all, treatments without taking part and gaining hands-on exposure.",
      "Such an approach to training in any field of healthcare would be judged wholly inadequate. If we consider learning how to take blood, or indeed how to extract a tooth, it becomes obvious that simply watching a procedure and then being expected to carry it out competently would be unacceptable to both our patients and to ourselves. With this in mind, Interface courses will have you assessing and injecting for the majority of your time, ensuring you get the learning opportunities you need to begin practising safely and confidently. As an Interface trainee, you will have the opportunity to directly perform all of the listed techniques – we make this our responsibility and guarantee."
    ],
    dates: ["date1", "date2", "date3"]
  },
  {
    id: 2,
    image: upperFaceBotox,
    title: "ADVANCED COURSE IN BOTULINUM TOXIN & DERMAL FILLER",
    price: "£100",
    overview:
      "Our one-day advanced course builds on the main techniques taught from the Foundation Course.",
    days: null,
    information: [
      {
        image: "",
        overview: "Advanced Botulinum Toxin treatments:",
        details: [
          "Neck – Platysma",
          "Jaw line/teeth grinding – Masseter",
          "Brow lift",
          "Bunny lines",
          "Chin – Mentalis",
          "Gummy smile"
        ]
      },
      {
        image: "",
        overview:
          "Advanced Dermal Filler Treatments (including training in use of cannulas):",
        details: [
          "Cheek augmentation",
          "Jaw line contouring",
          "Tear trough (under-eye bags) "
        ]
      }
    ],
    moreInformation: [
      "Entry to the Advanced Course will require proof of completion of any recognised Foundation Course. Group sizes are limited to 4 delegates per trainer to ensure adequate exposure and practice."
    ],
    dates: ["date1", "date2", "date3"]
  }
];

export default courses;
