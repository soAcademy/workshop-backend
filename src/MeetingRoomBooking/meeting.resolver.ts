import { PrismaClient } from "../../prisma/client";
import {
  IAddMeetingMembers,
  IBookMeetingRoom,
  IBookMeetingUser,
  ICreateMeetingRoom,
  ICreateUserAvailable,
  ICreateUserMeeting,
} from "./meeting.interface";

export const prisma = new PrismaClient();

export const createUserMeeting = (args: ICreateUserMeeting) =>
  prisma.meetingUser.create({
    data: {
      name: args.name,
      profileImage: args?.profileImage,
      postion: args?.postion,
      bio: args?.bio,
    },
  });

export const getUserMeeting = () => prisma.meetingUser.findMany();

export const bookMeetingUser = (args: IBookMeetingUser) =>
  prisma.meetingUserBooked.create({
    data: {
      user: { connect: { id: args.userId } },
      meetingRoom: { connect: { id: args.meetingRoomId } },
      meetingDetail: args.meetingDetail,
      bookingStart: args.bookingStart,
      bookingEnd: args.bookingEnd,
      nameOfBooker: args.nameOfBooker,
      tel: args.tel,
    },
  });

export const addMeetingMembers = (args: IAddMeetingMembers) =>
  prisma.meetingMembers.create({
    data: {
      booking: { connect: { id: args.bookedId } },
      name: args?.name,
      email: args?.email,
      tel: args?.tel,
    },
  });

export const createUserAvailable = (args: ICreateUserAvailable) =>
  prisma.meetingUserAvailable.create({
    data: {
      user: { connect: { id: args.userId } },
      availableStart: args.availableStart,
      availableEnd: args.availableEnd,
    },
  });

export const createMeetingRoom = (args: ICreateMeetingRoom) =>
  prisma.meetingRoom.create({
    data: {
      name: args.name,
      floor: args.floor,
      building: args.building,
    },
  });

export const bookMeetingRoom = (args: IBookMeetingRoom) =>
  prisma.meetingRoomBooked.create({
    data: {
      meetingRoom: { connect: { id: args.meetingRoomId } },
      byUserId: { connect: { id: args.userId } },
      bookingStart: args.bookingStart,
      bookingEnd: args.bookingEnd,
    },
  });

export const getMeetingRoom = () => prisma.meetingRoom.findMany();

//meeting room แต่ละอันมมีจองเวลาไหนแลพใครจอง ใครเข้าบ้าง
// User คนนี้ไม่ว่างเวลาไหน ว่างเวลาไหน แล้วที่ไม่ว่าง detail มีตติ้งเปนไง
// edit user detail
// edit meeting detail
// delete meeting
// edit เวลาว่าง
// edit meeting room detail
// ตอน create meeting member รับเป็น array แล้ว map ได้มั้ย
// รับ Date time set type ยังไง
