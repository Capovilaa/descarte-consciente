import { PartialType } from "@nestjs/mapped-types";
import { CreateScoreDTO } from "./create-score";

export class UpdateScoreDTO extends PartialType(CreateScoreDTO){}