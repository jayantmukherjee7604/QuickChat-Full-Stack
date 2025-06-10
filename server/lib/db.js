import mongoose from 'mongoose';

// export const connectDB = async () => {
//   try{

//     mongoose.connection.on('connected',()=>console.log('database connected'));

//     await mongoose.connect(process.env.MONGODB_URI + '/chat-app');
//   }
//   catch(error){
//     console.log(error);
//   }
// };

export const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('MongoDB connected'));
    mongoose.connection.on('error', (err) => console.error('MongoDB error', err));
    
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error('Connection failed:', error);
    process.exit(1);
  }
};

