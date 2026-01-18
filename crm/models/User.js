import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String },
    email: { 
        type: String, 
        required: true, 
        unique: true,  // Унікальний індекс — блокує дублікати на рівні БД
        lowercase: true,  // Автоматично робить lowercase при збереженні
        trim: true  // Автоматично trim'ить пробіли
    },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['superadmin', 'manager', 'supervisor', 'support', 'client'],
        default: 'client'
    },
    avatar: { type: String },
    lastActive: { type: Date, default: Date.now }
}
, { timestamps: true });

const usersActivity = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true }, // наприклад: 'create_task', 'login', 'update_deal'
    targetId: { type: String }, // optional — ID об'єкта, який змінювався
    ip: { type: String }, // ip для отримання геолокації
    userAgent: { type: String }, // з якого присткрою та браузера була остання активність
}
, { timestamps: true });

export const User =
    mongoose.models.User || mongoose.model("User", userSchema);
  
export const Activity =
    mongoose.models.Activity || mongoose.model("Activity", usersActivity);