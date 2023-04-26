/**
 * * Import
 */
import express from 'express' // server
import './util/config.js'    // .env
import morgan from 'morgan' // logger
import cors from 'cors'    // sicherheit
import multer from 'multer' // bilder   + input fields
import cookieParser from 'cookie-parser' // auslesen von Cookies
import { v4 as uuidv4 } from 'uuid'
// import { getDb } from './util/db.js' // db
import { fileTypeFromBuffer } from 'file-type'   // Dateityp erkenne
import path from 'path'    // zum Bild - Pfad in der MongoDB speichern
import { ObjectId } from 'mongodb' // für get/:id  zum auslesen von const { id } = req.params
import express_validator from 'express-validator' // Validierung im backEnd Server
import nodemailor from 'nodemailer' // email versenden



