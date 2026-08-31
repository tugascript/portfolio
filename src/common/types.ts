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
}

export enum ProgrammingFramework {
    NestJS = "NestJS",
    Flutter = "Flutter",
    Fiber = "Fiber",
    Actix = "Actix Web",
}

export enum Database {
    PostgreSQL = "PostgreSQL",
    Redis = "Redis",
    Kafka = "Kafka",
    SurrealDB = "SurrealDB",
    Qdrant = "Qdrant",
}

export type CvDataDate = {
    readonly month?: number;
    readonly year: number;
}

export type OpenSourceProject = {
    readonly name: string;
    readonly description: string;

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

    readonly githubUrl: string;
    readonly websiteUrl?: string;
    readonly tags: string[];
};