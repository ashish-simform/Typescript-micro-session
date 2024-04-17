/**
	Type features
		1. Unions
		2. Insertions (&)
		3. Primitives
		4. ShortHand functions
		5. Advanced type functions
	
	Interface features
		1. Declaration merging
		2. Familiarity (extends)
 */

/**
 * Declaration Merging
 */

export interface Request {
  body: any;
}

export interface Request {
  json: any;
}

export function handleRequest(req: Request) {
  req.body;
  req.json;
}
