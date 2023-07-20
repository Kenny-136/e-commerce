// - You should store the following information:
// - quantity
// - variants (could be colors, sizes, etc)
// - price per unit
// - name
// - image url
// - favourited or not (boolean)
//   All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

export const data = 
{data: 
  [
    {
      "name": "Ultra Stretch Jeans",
      "id": 1,
      "description": "High stretch and recovery rate for incredible comfort. The perfect skinny fit.",
      "variants": [
        {"colour":"Blue",
        "id": 1.1,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "8",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/455472/item/augoods_66_455472.jpg?width=750"

        },

        {"colour":"Black",
        "id": 1.2,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "16",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/455472/item/augoods_09_455472.jpg?width=750"
        }
      ],
      "favourited": true,
      "price": 59.90
    },
    { 
      "name": "Wide Fit Jeans",
      "id": 2,
      "description": "Based on customer feedback, we updated the design with a sturdy fabric and jeans-like details.",
      "variants": [
        {"colour":"Navy",
        "id": 2.1,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "8",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450245/item/augoods_65_450245.jpg?width=750"
        },
        {"colour":"Dark Gray",
        "id": 2.2,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "16",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450245/item/augoods_08_450245.jpg?width=750"
        },
        {"colour":"Light Blue",
        "id": 2.3,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "16",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450245/item/augoods_63_450245.jpg?width=750"
        }
      ],
      "favourited": true,
      "price": 59.90
    },
    {
      "name": "Regular Fit Jeans",
      "id": 3,
      "description": "Specially selected yarn and processing for a vintage look and feel. Made of cotton denim. Jointly developed with Kaihara.",
      "variants": [
        {"colour":"Blue",
        "id": 3.1,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "8",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450244/item/augoods_63_450244.jpg?width=750"
        },
        {"colour":"Dark Gray",
        "id": 3.2,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "16",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450244/item/augoods_06_450244.jpg?width=750"
        },
        {"colour":"Dark Blue",
        "id": 3.3,
        "size": ["XS","S", "M", "L", "XL"],
        "quantity": "16",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/au/imagesgoods/450244/item/augoods_66_450244.jpg?width=750"
        }
      ],
      "favourited": true,
      "price": 59.90
    }
  ]
}

export default data