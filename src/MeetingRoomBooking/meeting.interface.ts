import * as t from "io-ts";
import { optional } from "io-ts-extra";

export const createUserMeetingCodec = t.type({
  name: t.string,
  profileImage: optional(t.string),
  postion: optional(t.string),
  bio: optional(t.string),
});

export interface ICreateUserMeeting
  extends t.TypeOf<typeof createUserMeetingCodec> {}

export const bookMeetingUserCodec = t.type({
  userId: t.number,
  meetingRoomId: t.number,
  meetingDetail: t.string,
  bookingStart: t.string,
  bookingEnd: t.string,
  nameOfBooker: t.string,
  tel: t.string,
});

export interface IBookMeetingUser
  extends t.TypeOf<typeof bookMeetingUserCodec> {}

export const addMeetingMembersCodec = t.type({
  bookedId: t.number,
  name: optional(t.string),
  email: optional(t.string),
  tel: optional(t.string),
});

export interface IAddMeetingMembers
  extends t.TypeOf<typeof addMeetingMembersCodec> {}

export const createUserAvailableCodec = t.type({
  userId: t.number,
  availableStart: t.string,
  availableEnd: t.string,
});

export interface ICreateUserAvailable
  extends t.TypeOf<typeof createUserAvailableCodec> {}

export const createMeetingRoomCodec = t.type({
  name: t.string,
  floor: t.number,
  building: t.string,
});

export interface ICreateMeetingRoom
  extends t.TypeOf<typeof createMeetingRoomCodec> {}

export const bookMeetingRoomCodec = t.type({
  meetingRoomId: t.number,
  userId: t.number,
  bookingStart: t.string,
  bookingEnd: t.string,
});

export interface IBookMeetingRoom
  extends t.TypeOf<typeof bookMeetingRoomCodec> {}
