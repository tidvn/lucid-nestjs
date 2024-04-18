import { Injectable } from '@nestjs/common';
import { Blockfrost, Lucid } from "lucid-cardano";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async testLucid(): Promise<any> {
    const lucid = await Lucid.new(
      new Blockfrost(
        "https://cardano-preprod.blockfrost.io/api/v0",
        "preprodeMB9jfka6qXsluxEhPLhKczRdaC5QKab",
      ),
      "Preprod",
    );
    const privateKey = lucid.utils.generatePrivateKey();
    return privateKey;
  }
}
