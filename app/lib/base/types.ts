/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/card_votes': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.card_votes.id'];
          vote_type?: parameters['rowFilter.card_votes.vote_type'];
          created_at?: parameters['rowFilter.card_votes.created_at'];
          user_id?: parameters['rowFilter.card_votes.user_id'];
          title?: parameters['rowFilter.card_votes.title'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['card_votes'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** card_votes */
          card_votes?: definitions['card_votes'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
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
          id?: parameters['rowFilter.card_votes.id'];
          vote_type?: parameters['rowFilter.card_votes.vote_type'];
          created_at?: parameters['rowFilter.card_votes.created_at'];
          user_id?: parameters['rowFilter.card_votes.user_id'];
          title?: parameters['rowFilter.card_votes.title'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
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
          id?: parameters['rowFilter.card_votes.id'];
          vote_type?: parameters['rowFilter.card_votes.vote_type'];
          created_at?: parameters['rowFilter.card_votes.created_at'];
          user_id?: parameters['rowFilter.card_votes.user_id'];
          title?: parameters['rowFilter.card_votes.title'];
        };
        body: {
          /** card_votes */
          card_votes?: definitions['card_votes'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/profiles': {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          last_name?: parameters["rowFilter.profiles.last_name"];
          email?: parameters["rowFilter.profiles.email"];
          bio?: parameters["rowFilter.profiles.bio"];
          website?: parameters["rowFilter.profiles.website"];
          github?: parameters["rowFilter.profiles.github"];
          phone?: parameters["rowFilter.profiles.phone"];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['profiles'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
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
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          last_name?: parameters["rowFilter.profiles.last_name"];
          email?: parameters["rowFilter.profiles.email"];
          bio?: parameters["rowFilter.profiles.bio"];
          website?: parameters["rowFilter.profiles.website"];
          github?: parameters["rowFilter.profiles.github"];
          phone?: parameters["rowFilter.profiles.phone"];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
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
          id?: parameters["rowFilter.profiles.id"];
          first_name?: parameters["rowFilter.profiles.first_name"];
          last_name?: parameters["rowFilter.profiles.last_name"];
          email?: parameters["rowFilter.profiles.email"];
          bio?: parameters["rowFilter.profiles.bio"];
          website?: parameters["rowFilter.profiles.website"];
          github?: parameters["rowFilter.profiles.github"];
          phone?: parameters["rowFilter.profiles.phone"];
        };
        body: {
          /** profiles */
          profiles?: definitions['profiles'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/handle_new_user": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferParams'];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/rpc/get_votes_by_title': {
    post: {
      parameters: {
        body: {
          args: {
            /** Format: text */
            vote_title: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferParams'];
        };
      };
      responses: {
        /** OK */
        200: unknown;
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
    vote_type: 'great' | 'good' | 'bad' | 'shit';
    /**
     * Format: timestamp with time zone
     * @default CURRENT_TIMESTAMP
     */
    created_at?: string;
    /** Format: uuid */
    user_id?: string;
    /** Format: text */
    title: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: character varying */
    first_name?: string;
    /** Format: character varying */
    last_name?: string;
    /** Format: character varying */
    email: string;
    /** Format: text */
    bio?: string;
    /** Format: character varying */
    website?: string;
    /** Format: character varying */
    github?: string;
    /** Format: character varying */
    phone?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object';
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none';
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
  'body.card_votes': definitions['card_votes'];
  /** Format: bigint */
  'rowFilter.card_votes.id': string;
  /** Format: public.card_vote_types */
  'rowFilter.card_votes.vote_type': string;
  /** Format: timestamp with time zone */
  'rowFilter.card_votes.created_at': string;
  /** Format: uuid */
  'rowFilter.card_votes.user_id': string;
  /** Format: text */
  'rowFilter.card_votes.title': string;
  /** @description profiles */
  'body.profiles': definitions['profiles'];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: character varying */
  "rowFilter.profiles.first_name": string;
  /** Format: character varying */
  "rowFilter.profiles.last_name": string;
  /** Format: character varying */
  "rowFilter.profiles.email": string;
  /** Format: text */
  "rowFilter.profiles.bio": string;
  /** Format: character varying */
  "rowFilter.profiles.website": string;
  /** Format: character varying */
  "rowFilter.profiles.github": string;
  /** Format: character varying */
  "rowFilter.profiles.phone": string;
}

export interface operations {}

export interface external {}