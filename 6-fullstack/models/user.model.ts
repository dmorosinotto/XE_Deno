import { z } from "zod";

export const UserModel = z.object({
	id: z.number().int(),
	name: z.string(),
	sex: z.boolean().optional(),
	cap: z.string().length(5) //z.coerce.number()
});

export type TUser = z.infer<typeof UserModel>;

export const FilterModel = UserModel.partial();
export type TFilter = z.infer<typeof FilterModel>;
