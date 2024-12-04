import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define("usuarios",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    apellido:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    direccion:{
        type: DataTypes.STRING(255),
        allowNull: true
    },
    telefono:{
        type: DataTypes.INTEGER(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    clave: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    clave2: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})