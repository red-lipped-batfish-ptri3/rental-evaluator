import { createSlice } from "@reduxjs/toolkit";

export const prop = createSlice({
  // Creating the name of the slice => Correlated to redux store
  name: "prop",
  // initial state reducers wil
  initialState: {
    properties: [{
      "zpid": 79503534,
      "targetForSale": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Street address": "190 E 72nd St APT 11B",
              "City": "New York",
              "State": "NY",
              "Zip code": "10021",
              "Address": "190 E 72nd St APT 11B, New York, NY 10021",
              "Price": "$595000",
              "Interest rate": 2.821,
              "Type": "CONDO",
              "Size": "null sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Est. monthly mortgage": 1963,
              "Rent array": [
                3300,
                4600,
                5795,
                6200,
                6500,
                6595,
                6700,
                7200,
                7295,
                7395,
                8000,
                8800,
                9450,
                11000
              ],
              "Est. monthly rent": 6950,
              "Price-to-rent ratio": 7,
              "Rating": "Strong buy",
              "Image": "https://photos.zillowstatic.com/fp/1d98b0153e0bef52b8218e6aa8fcb445-p_d.jpg",
              "ZPID": 79503534
            },
            "geometry": {
              "coordinates": [
                -73.960655212402,
                40.769622802734
              ],
              "type": "Point"
            }
          }
        ]
      },
      "propertiesForRental": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Address": "923 5th Ave APT 2F, New York, NY 10021",
              "Monthly rent": "$11000",
              "Type": "APARTMENT",
              "Size": "1285 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/7837950ecfacd7189ad43ff7c3bd0f8e-p_e.jpg",
              "ZPID": "219683812"
            },
            "geometry": {
              "coordinates": [
                -73.966025,
                40.773173
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "201 E 69th St APT 12O, New York, NY 10021",
              "Monthly rent": "$6595",
              "Type": "APARTMENT",
              "Size": "1400 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/ea7a56426d9ecb3fefd5e7814e3aa2d1-p_e.jpg",
              "ZPID": "2107426977"
            },
            "geometry": {
              "coordinates": [
                -73.961546,
                40.767751
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "250 E 73rd St APT 5G, New York, NY 10021",
              "Monthly rent": "$5795",
              "Type": "APARTMENT",
              "Size": "1200 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/853fb3a0786bf12e1024cd47165c9a19-p_e.jpg",
              "ZPID": "2117085947"
            },
            "geometry": {
              "coordinates": [
                -73.958237,
                40.769502
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "300 E 75th St APT 28C, New York, NY 10021",
              "Monthly rent": "$7395",
              "Type": "APARTMENT",
              "Size": "null sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/f28c8f3155b06220191d48c99e7c2747-p_e.jpg",
              "ZPID": "2124624308"
            },
            "geometry": {
              "coordinates": [
                -73.95657,
                40.77044
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "220 E 72nd St #A8, New York, NY 10021",
              "Monthly rent": "$6500",
              "Type": "APARTMENT",
              "Size": "null sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/6e542bff364b8e822e7b6c094a8bf609-p_e.jpg",
              "ZPID": "2070096211"
            },
            "geometry": {
              "coordinates": [
                -73.960131,
                40.769546
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "330 E 75th St APT 2C, New York, NY 10021",
              "Monthly rent": "$4600",
              "Type": "APARTMENT",
              "Size": "1050 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/c56068c143631dd932f42500706890fb-p_e.jpg",
              "ZPID": "2118553009"
            },
            "geometry": {
              "coordinates": [
                -73.955249,
                40.769797
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "525 E 72nd St #40I, New York, NY 10021",
              "Monthly rent": "$7200",
              "Type": "APARTMENT",
              "Size": "1295 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/40e1419ad4dad16a3b737d5e54565ff9-p_e.jpg",
              "ZPID": "2070263928"
            },
            "geometry": {
              "coordinates": [
                -73.952046,
                40.766131
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "220 E 72nd St APT 25B, New York, NY 10021",
              "Monthly rent": "$8800",
              "Type": "APARTMENT",
              "Size": "1904 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/93dcac20c218b90bdc9341a5b49fdb20-p_e.jpg",
              "ZPID": "2108180824"
            },
            "geometry": {
              "coordinates": [
                -73.959647,
                40.76914
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "319 E 73rd St #1C, New York, NY 10021",
              "Monthly rent": "$3300",
              "Type": "APARTMENT",
              "Size": "9585 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/832a47ab4c11da17a12ad779da766ea0-p_e.jpg",
              "ZPID": "244899580"
            },
            "geometry": {
              "coordinates": [
                -73.957354,
                40.769424
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "501 E 74th St APT 15A, New York, NY 10021",
              "Monthly rent": "$7295",
              "Type": "APARTMENT",
              "Size": "1222 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/e27b88860f6c60c7d167f2f27489bfe6-p_e.jpg",
              "ZPID": "2070887526"
            },
            "geometry": {
              "coordinates": [
                -73.952409,
                40.768114
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "525 E 72nd St APT 46F, New York, NY 10021",
              "Monthly rent": "$8000",
              "Type": "APARTMENT",
              "Size": "1380 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/40e1419ad4dad16a3b737d5e54565ff9-p_e.jpg",
              "ZPID": "2101175762"
            },
            "geometry": {
              "coordinates": [
                -73.951597,
                40.766494
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "188 E 76th St APT 6D, New York, NY 10021",
              "Monthly rent": "$6200",
              "Type": "APARTMENT",
              "Size": "1183 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/b8790934afdf1d4934a4be54c9d4b3e8-p_e.jpg",
              "ZPID": "31535537"
            },
            "geometry": {
              "coordinates": [
                -73.95928,
                40.77232
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "40 E 75th St APT 5, New York, NY 10021",
              "Monthly rent": "$6700",
              "Type": "APARTMENT",
              "Size": "1562 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/5a630fde705a4df6a9b35e4580243321-p_e.jpg",
              "ZPID": "2078505215"
            },
            "geometry": {
              "coordinates": [
                -73.963379,
                40.773217
              ],
              "type": "Point"
            }
          },
          {
            "type": "Feature",
            "properties": {
              "Address": "422 E 72nd St APT 21E, New York, NY 10021",
              "Monthly rent": "$9450",
              "Type": "APARTMENT",
              "Size": "1340 sqft",
              "# bedrooms": 2,
              "# bathrooms": 2,
              "Image": "https://photos.zillowstatic.com/fp/d2ea9498e14bbc0d034efbf654e7b06c-p_e.jpg",
              "ZPID": "31539091"
            },
            "geometry": {
              "coordinates": [
                -73.954963,
                40.766971
              ],
              "type": "Point"
            }
          }
        ]
      }
    }],
  },
  reducers: {
    propertyReducer: (state, action) => {
      state.properties = action.payload;
 
    },
  },
});

export const { propertyReducer } = prop.actions;

export default prop.reducer;

export const propState = (state) => state;