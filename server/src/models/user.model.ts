import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({ 
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            type: String,
            default: "user",
            enum: ["user", "admin", "moderator"]
        }
    ],
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
    }
});

UserSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

const User = mongoose.model(
    "User", UserSchema
);

export default User;