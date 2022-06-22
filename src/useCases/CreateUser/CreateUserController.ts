import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserCase: CreateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.createUserCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).json({ message: "uma api bem legal" });
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.message || "unexpected error" });
    }
  }
}
