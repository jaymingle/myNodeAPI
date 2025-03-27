import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        name: {
                type: String,
                required: [true, 'Name is required!!!']
        },

        location: {
                type: String,
                required: false
        },

        image: {
                type: String,
                required: false
        },

            founded: {
                type: Number,
                    required: true,
                    default: 0
            }

},
    {
            timestamps: true
    }
)