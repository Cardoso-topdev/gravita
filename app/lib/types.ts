/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/card_votes": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.card_votes.id"];
          vote_type?: parameters["rowFilter.card_votes.vote_type"];
          created_at?: parameters["rowFilter.card_votes.created_at"];
          user_id?: parameters["rowFilter.card_votes.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["card_votes"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** card_votes */
          card_votes?: definitions["card_votes"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.card_votes.id"];
          vote_type?: parameters["rowFilter.card_votes.vote_type"];
          created_at?: parameters["rowFilter.card_votes.created_at"];
          user_id?: parameters["rowFilter.card_votes.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.card_votes.id"];
          vote_type?: parameters["rowFilter.card_votes.vote_type"];
          created_at?: parameters["rowFilter.card_votes.created_at"];
          user_id?: parameters["rowFilter.card_votes.user_id"];
        };
        body: {
          /** card_votes */
          card_votes?: definitions["card_votes"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/card_votes_percentages": {
    get: {
      parameters: {
        query: {
          vote_type?: parameters["rowFilter.card_votes_percentages.vote_type"];
          percentage?: parameters["rowFilter.card_votes_percentages.percentage"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["card_votes_percentages"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
}

export interface definitions {
  card_votes: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: public.card_vote_types
     * @enum {string}
     */
    vote_type: "great" | "good" | "bad" | "shit";
    /**
     * Format: timestamp with time zone
     * @default CURRENT_TIMESTAMP
     */
    created_at?: string;
    /** Format: uuid */
    user_id?: string;
  };
  card_votes_percentages: {
    /**
     * Format: public.card_vote_types
     * @enum {string}
     */
    vote_type?: "great" | "good" | "bad" | "shit";
    /** Format: bigint */
    percentage?: number;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description card_votes */
  "body.card_votes": definitions["card_votes"];
  /** Format: bigint */
  "rowFilter.card_votes.id": string;
  /** Format: public.card_vote_types */
  "rowFilter.card_votes.vote_type": string;
  /** Format: timestamp with time zone */
  "rowFilter.card_votes.created_at": string;
  /** Format: uuid */
  "rowFilter.card_votes.user_id": string;
  /** @description card_votes_percentages */
  "body.card_votes_percentages": definitions["card_votes_percentages"];
  /** Format: public.card_vote_types */
  "rowFilter.card_votes_percentages.vote_type": string;
  /** Format: bigint */
  "rowFilter.card_votes_percentages.percentage": string;
}

export interface operations {}

export interface external {}