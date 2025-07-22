from pydantic import BaseModel, ConfigDict

class BaseResponse(BaseModel):
    """ Base class for API responses."""
    model_config = ConfigDict(from_attributes=True, arbitrary_type_allowed=True)