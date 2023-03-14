import {
  MachineTypeEnum,
  MaintenanceLevelEnum,
  ModeEnum,
  SizeEnum,
} from "@prisma/client";
import {
  addModestoMachine,
  createBranch,
  createFranchisee,
  createMachine,
  createMaintenance,
  createModes,
  createTechnician,
  createUsage,
  createUser,
  getUserBalance,
  refillUserBalance,
  removeMachine,
  updateBranch,
  updateFranchisee,
  updateMode,
  updateTechnician,
  updateUser,
} from "./resolver";

describe("Laundry-backend", () => {
  let franchiseeId: number;
  test("createFranchisee", async () => {
    const name = "TestUser" + new Date().getTime();
    const result = await createFranchisee({
      name: name,
      phoneNumber: "123456798",
    });
    franchiseeId = result.id;
    expect(result.name).toBe(name);
    expect(result.phoneNumber).toBe("123456798");
  });

  test("updateFranchisee", async () => {
    const result = await updateFranchisee({
      userId: franchiseeId,
      phoneNumber: "0123456789",
    });
    expect(result.phoneNumber).toBe("0123456789");
  });

  test("createBranch", async () => {
    const result = await createBranch({
      location: "Bangkok" + new Date().getTime(),
      franchiseeId: franchiseeId,
      size: "L",
    });
    console.log("createBranch", result);
    expect(result).toEqual(
      expect.objectContaining({
        franchiseeId: franchiseeId,
        location: expect.any(String),
        size: expect.stringMatching(/S|M|L|XL/),
      })
    );
  });

  test("updateBranch", async () => {
    const newData = {
      branchId: 1,
      size: SizeEnum.XL,
      franchiseeId: 2,
      location: "Bangkok",
    };
    const result = await updateBranch(newData);
    console.log("updateBranch", result);
    expect(result).toEqual(
      expect.objectContaining({
        id: newData.branchId,
        size: newData.size,
        franchiseeId: newData.franchiseeId,
        location: newData.location,
      })
    );
  });
  let machineId: number;
  test("createMachine", async () => {
    const types = [
      MachineTypeEnum.DRYER,
      MachineTypeEnum.WASHER_FRONT,
      MachineTypeEnum.WASHER_TOP,
    ];
    const idx = Math.floor(Math.random() * types.length);
    const type = types[idx];
    const data = {
      type: type,
      size: 20,
      brand: "LG",
      model: "LG1234",
      mfd: new Date("2020-01-01T00:00:00").toDateString(),
      warrantyExpirationDate: new Date("2021-01-01T00:00:00").toDateString(),
      branchId: 2,
    };

    const result = await createMachine(data);
    machineId = result.id;
    console.log("createMachine", result);
    expect(result.model).toBe(data.model);
  });

  test("removeMachine", async () => {
    const data = {
      machineId: 3,
    };
    const result = await removeMachine(data);
    console.log("removeMachine", result);
    expect(result.branchId).toBe(null);
  });

  // test("createModes", async () => {
  //   const modes = [
  //     {
  //       mode: ModeEnum.HEAVY_WASH,
  //       duration: 40,
  //       weight: 10,
  //       price: 15
  //     },
  //     {
  //       mode: ModeEnum.SOFT_WASH,
  //       duration: 40,
  //       weight: 10,
  //       price: 15
  //     },
  //     {
  //       mode: ModeEnum.QUICK_WASH,
  //       duration: 30,
  //       weight: 10,
  //       price: 10
  //     },
  //     {
  //       mode: ModeEnum.WARM_WASH,
  //       duration: 40,
  //       weight: 10,
  //       price: 15
  //     },
  //     {
  //       mode: ModeEnum.COLD_WASH,
  //       duration: 40,
  //       weight: 10,
  //       price: 15
  //     },
  //     {
  //       mode: ModeEnum.WARM_DRY,
  //       duration: 40,
  //       weight: 10,
  //       price: 20
  //     },
  //     {
  //       mode: ModeEnum.COLD_DRY,
  //       duration: 40,
  //       weight: 10,
  //       price: 20
  //     },
  //     {
  //       mode: ModeEnum.HOT_DRY,
  //       duration: 40,
  //       weight: 10,
  //       price: 20
  //     },
  //     {
  //       mode: ModeEnum.WOOL,
  //       duration: 40,
  //       weight: 10,
  //       price: 20
  //     },
  //     {
  //       mode: ModeEnum.CLEAN,
  //       duration: 60,
  //       weight: 0,
  //       price: 0
  //     },
  //   ]
  //   const result = await createModes(modes)
  //   console.log('createModes', result)
  // })

  test("updateMode", async () => {
    const mode = {
      modeId: 1,
      duration: 50,
      weight: 15,
      price: 20,
    };
    const result = await updateMode(mode);
    console.log("updateMode", result);
    expect(result).toEqual(
      expect.objectContaining({
        id: mode.modeId,
        duration: mode.duration,
        weight: mode.weight,
        price: mode.price,
      })
    );
  });

  test("addModestoMachine", async () => {
    const modeIds = [1, 2, 4, 5, 6, 7];
    const result = await addModestoMachine({
      machineId: machineId,
      modeIds: modeIds,
    });
    console.log("addModestoMachine", result);
    expect(result.id).toBe(machineId);
  });
  test("createUser", async () => {
    const user = {
      username: "johnyxyz"+ new Date().getTime(),
      name: "JOHN",
      phoneNumber: "0555555555",
    };
    const result = await createUser(user);
    console.log("createUser", result);
    expect(result).toEqual(
      expect.objectContaining({
        name: user.name,
        phoneNumber: user.phoneNumber,
      })
    );
  });

  test("updateUser", async () => {
    const user = {
      userId: 1,
      name: "JANE",
      phoneNumber: "0555555555",
    };
    const result = await updateUser(user);
    console.log("updateUser", result);
    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
        name: user.name,
        phoneNumber: user.phoneNumber,
      })
    );
  });

  test("createTechnician", async () => {
    const technician = {
      username: "tech01"+new Date().getTime(),
      firstName: "JIMMY",
      lastName: "OLIVER",
      phoneNumber: "0112223333",
      joinDate: new Date("2014-12-01T00:00:00").toDateString(),
    };
    const result = await createTechnician(technician);
    console.log("createTechnician", result);
    expect(result).toEqual(
      expect.objectContaining({
        username: technician.username,
        phoneNumber: technician.phoneNumber,
      })
    );
  });

  test("updateTechnician", async () => {
    const technician = {
      username: "tech01",
      firstName: "JIMMO",
      phoneNumber: "0233322232",
    };
    const result = await updateTechnician(technician);
    console.log("updateTechnician", result);
    expect(result).toEqual(
      expect.objectContaining({
        username: "tech01",
        firstName: technician.firstName,
        phoneNumber: technician.phoneNumber,
      })
    );
  });

  test("refillUserBalance", async () => {
    const data = {
      userId: 1,
      topup: 1000,
    };
    const { balance } = await getUserBalance({ userId: data.userId });
    const result = await refillUserBalance(data);
    console.log("refillUserBalance", result);
    expect(result).toEqual(
      expect.objectContaining({
        id: data.userId,
        balance: balance + 1000,
      })
    );
  });

  test("createMaintenance", async () => {
    const data = {
      level: MaintenanceLevelEnum.SCHEDULE,
      cause: "SCHEDULE MAINTENANCE",
      machineId: 1,
      technicianIds: [1],
    };
    const result = await createMaintenance(data);
    console.log("createMaintenance", result);
    expect(result.cause).toBe(data.cause);
    expect(result.machineId).toBe(data.machineId);
  });

  test("createUsage", async () => {
    const data = {
      userId: 1,
      machineId: 1,
      modeId: 1,
      price: 20,
      startTime: new Date().toLocaleString(),
      finishTime: new Date(new Date().getTime() + 3000000).toLocaleString(),
    };
    const result = await createUsage(data);
    console.log("createUsage", result);
    expect(result.userId).toBe(data.userId);
    expect(result.price).toBe(data.price);
  });
});
