import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { User } from "../models/user_model.js";

dotenv.config();

const createOrUpdateAdmin = async () => {
    try{
        let admin = await User.findOne({where: {login: "admin"}});

        if (!admin){
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
            admin = await User.create({
                login: "admin",
                password: hashedPassword,
                is_admin: 1
            });
            console.log("Создан админ-пользователь");
        } else {
            const isPasswordMatch = await bcrypt.compare(process.env.ADMIN_PASSWORD, admin.password);

            if(!isPasswordMatch){
                const newHashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
                admin.password = newHashedPassword;
                await admin.save();
                console.log("Обновлен пароль админа")
            }
        }
    } catch (error) {
        console.log(process.env.ADMIN_PASSWORD);
        console.log("Ошибка при создании или обновлении админа: ", error)
    }
}

export default createOrUpdateAdmin;