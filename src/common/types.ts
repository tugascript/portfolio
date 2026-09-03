export enum OpenSourceProjectStatus {
  Ongoing = "Ongoing",
  Maintenance = "Maintenance",
  Completed = "Completed",
  Archived = "Archived",
  Abandoned = "Abandoned",
}

export enum OpenSourceProjectRole {
  Author = "Author",
  Contributor = "Contributor",
  Maintainer = "Maintainer",
}

export enum ProgrammingLanguage {
  Rust = "Rust",
  Go = "Go",
  TypeScript = "TypeScript",
  Python = "Python",
  CPP = "C++",
  Dart = "Dart",
  SQL = "SQL",
}

export enum ProgrammingFramework {
  NestJS = "NestJS",
  NextJs = "Next.js",
  Express = "Express",
  Fastify = "Fastify",
  ApolloServer = "Apollo Server",
  Flutter = "Flutter",
  Fiber = "Fiber",
  Actix = "Actix Web",
  Astro = "Astro",
  GRPC = "gRPC",
}

export enum Database {
  PostgreSQL = "PostgreSQL",
  SQLite = "SQLite",
  Redis = "Redis",
  Kafka = "Kafka",
  SurrealDB = "SurrealDB",
  Qdrant = "Qdrant",
  Vault = "Vault",
}

export type CvDataDate = {
  readonly month?: number;
  readonly year: number;
};

type ContributionUrls = {
  readonly pullRequestUrl: string;
  readonly issueUrl?: string;
}

type OpenSourceProjectUrls = {
  readonly repositoryUrl?: string;
  readonly packageUrl?: string;
  readonly documentationUrl?: string;
  readonly websiteUrl?: string;
  readonly internalSeriesBlogPath?: string;
  readonly devToSeriesUrl?: string;
  readonly hackathonUrl?: string;
  readonly contributionUrls?: ContributionUrls[];
  readonly issueUrl?: string;
};

export type OpenSourceProject = {
  readonly name: string;
  readonly summary: string;
  readonly highlighted: boolean;

  readonly startDate: CvDataDate;
  readonly endDate?: CvDataDate;
  readonly status: OpenSourceProjectStatus;
  readonly role: OpenSourceProjectRole;

  readonly primaryLanguage: ProgrammingLanguage;
  readonly languages: ProgrammingLanguage[];
  readonly frameworks: ProgrammingFramework[];
  readonly databases: Database[];
  readonly libraries: string[];
  readonly tools: string[];

  readonly urls: OpenSourceProjectUrls;

  readonly tags: string[];
};
